import styled from 'styled-components';

export const Card = styled.li`
  box-shadow: 0 0 5px 0px ${(props) => props.theme.colors.shadow};
  max-width: 265px;
  margin: 0 15px 75px;
  border-radius: 5px;
  animation: card 0.4s ease-in forwards;
  transition: transform 0.3s;
  cursor: pointer;

  a {
    display: block;
  }

  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.05);
  }

  @keyframes card {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 634px) {
    max-width: 328px;
  }

  @media screen and (max-width: 390px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }
`;

export const Flag = styled.div`
  min-height: 160px;

  img {
    display: block;
    width: 265px;
    height: 199px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;

    @media screen and (max-width: 634px) {
      width: 328px;
      min-height: 199px;
    }

    @media screen and (max-width: 390px) {
      width: 100%;
      min-height: 189px;
    }
  }
`;

export const Info = styled.div`
  box-sizing: border-box;
  padding: 30px 25px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.h3`
  font-size: 1.16rem;
  line-height: 1.1;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const Data = styled.div`
  margin-bottom: 5px;

  .data_title {
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
  }

  .data_response {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
