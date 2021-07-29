import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartCountStyles = styled.div`
  background: white;
  color: var(--black);
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 1.5rem;
  min-width: 2.5rem;
  margin-left: 0.5rem;
  box-shadow: var(--boxShadow);
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(3) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(3) rotateX(0.5turn);
  }
`;

export default function CartCount({ count }) {
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 400, exit: 400 }}
        >
          <CartCountStyles>{count}</CartCountStyles>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
}

CartCount.propTypes = {
  count: PropTypes.number,
};
