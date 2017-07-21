import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  it('has the correct class', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.class('comment-box');
  });

  it('has a textarea', () => {
    //what matchers are needed chai-jquery
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
