
const rssParser = require('rss-parser')

function getJsonFeed(name) {
    const parser = new rssParser({
        customFields: {
            item: [
                ['content:encoded', 'content']
            ],
        },
    });

    // return parser.parseString(xmlTestString).then(feed => {
    return parser.parseURL(`https://app.jazz.co/feeds/rss/jobs/ampifire `).then(feed => {

        const parsedFeeds = feed.items.map(item => {

            const {
                title
            } = item
            return {
                title
            }
        })
        return parsedFeeds
    })
}

function sourceNodes({
                         actions,
                         createNodeId,
                         createContentDigest,
                         reporter
                     }, {
                         name
                     }) {
    const {
        createNode
    } = actions
    if (!name) {
        const missingOption = !name ? 'name' : 'name'
        reporter.panic(`${missingOption} has to defined in plugin configuration.`)
    }

    return getJsonFeed(name).then(feed => {
        feed.forEach(item => {
            console.log(feed);
            const id = createNodeId(item.title)
            createNode({
                ...item,
                id,
                parent: null,
                children: [],
                internal: {
                    contentDigest: createContentDigest(feed),
                    type: name,
                    mediaType: 'application/json',
                    content: JSON.stringify(item),
                }
            })
        })
    })
}

exports.sourceNodes = sourceNodes