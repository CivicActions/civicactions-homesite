import React from 'react';
import '../sass/styles.scss';
import GeneralLayout from '../layouts/general';

// Styles just for the styleguide.
const styleGuideStyles = {
  background: '#eeeeee',
  padding: '160px 0',
};

// Margin bottom 64px - 16px(Paragraph bottom) = 48px;
const sectionStyles = {
  margin: '0 auto',
  maxWidth: '1200px',
  marginBottom: '48px',
  background: '#ffffff', // Just for the styleguide.
};

const StyleGuidePage = () => {
  return (
    <GeneralLayout>
      <div style={styleGuideStyles}>
        <section style={sectionStyles}>
          <h1>(H1) In id erat non orci commodo lobortis.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at hendrerit ex. In id magna lorem. In ut aliquam quam. Nulla ultrices sem id lorem commodo lacinia a id ipsum. Nulla malesuada dolor id ipsum dignissim luctus. Donec nec lorem quis magna ultrices interdum sed vel ex. Aliquam eget lorem ultricies, tristique ipsum vitae, porta urna. Cras sed velit maximus, consectetur nisl ac, fringilla lorem. Nulla facilisi.</p>
        </section>
        <section style={sectionStyles}>
          <h2>(H2) Cras placerat accumsan nulla.</h2>
          <p>Donec euismod pulvinar purus dictum bibendum. Donec quis ipsum at leo lacinia egestas. Sed a aliquet dui. Mauris urna sem, posuere vitae venenatis ut, tempus ac quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis quis elementum lacus. Nulla facilisi. Nulla pellentesque nibh non mi luctus, sit amet iaculis odio faucibus. Nulla vel rutrum felis. Maecenas eu vulputate libero. Etiam consectetur eget risus sit amet tincidunt. Aliquam ex leo, egestas quis elit non, euismod suscipit sem. Etiam magna lorem, lobortis vitae blandit id, ullamcorper eu tellus. Cras sit amet dolor tempus, egestas sapien vel, tempus urna. Mauris posuere pulvinar lectus, accumsan tempor nisi dapibus quis. Vestibulum aliquam urna sit amet est interdum, ut tempus quam ullamcorper.</p>
        </section>
        <section style={sectionStyles}>
          <h3>(H3) Pellentesque dapibus suscipit ligula.</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
        </section>
        <section style={sectionStyles}>
          <h4>(H4) Nam a sapien.</h4>
          <p>Morbi cursus lacus in scelerisque eleifend. Mauris volutpat lorem in nisl imperdiet, et molestie justo maximus. Pellentesque ac nunc nec nisl faucibus egestas vel eu nisi. Integer eget nisl vel nulla sagittis finibus. Mauris nec sem odio. Sed varius nunc eu ligula volutpat posuere. Morbi id libero at massa sagittis commodo ut eget odio. Nulla rutrum fringilla lectus.</p>
        </section>
      </div>
    </GeneralLayout>
  );
};

export default StyleGuidePage;
