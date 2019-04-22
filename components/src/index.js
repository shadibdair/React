import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
      <ApprovalCard> 
          <h4>Warning!</h4>
          Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
            author="Shadi" 
            timeAgo="Today at 6:00 PM" 
            text2text="Hello My Friends! What's up?"
            avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
        author="Ronaldo" 
        timeAgo="Today at 6:30 PM" 
        text2text="Hii Shadi, I'm totaly Good"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
        author="Messi" 
        timeAgo="Yesterday at 2:37 PM" 
        text2text="hey, i getting ready to hangout ;)"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
      </div>
        
    );

};

ReactDOM.render(<App/>, document.querySelector('#root'));
