import styled from "styled-components";

export const Item =styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
  font-size: 16px;
  background-color: #fff;
  width: 280px;
  padding: 5px 0 5px 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 20px 24px;
  border-radius: 5px;
  border: 1px solid rgb(139, 139, 139);
  overflow: hidden,
  margin-bottom: 5px;
`;

export const Status = styled.span`
width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
background-color: ${props => {switch (props.type){
    case 'status__online':
        return 'rgb(7, 141, 7)';
    case 'status__offline':
        return 'rgb(248, 12, 12)';
    default:
        return 'rgb(30, 40, 140)'
}}
}`
;

export const Avatar = styled.img`
margin-right: 10px;
`

export const Name = styled.p`
font-weight: 500;
font-size: 20px;
`