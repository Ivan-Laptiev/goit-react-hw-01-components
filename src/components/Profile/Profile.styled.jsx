import styled from "styled-components";

export const ProfileStyle = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #fff;
  width: 280px;
  padding: 50px 0 0 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 20px 24px;
  border-radius: 5px;
  border: 1px solid rgb(139, 139, 139);
 
  margin-bottom: 100px;
`

export const Description = styled.div`
color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`

export const AvatarProfile = styled.img`
width: 100px;
  height: auto;
  border-radius: 50%;
  background-color: rgba(208, 208, 208, 0.993);
  margin-bottom: 30px;
`
export const NameProfile = styled.p`
font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const TagProfile = styled.p`
color: rgb(139, 139, 139);
  font-weight: 500;
  margin-bottom: 10px;
`

export const Location = styled.p`
color: rgb(139, 139, 139);
  font-weight: 500;
`

export const StatsList = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  list-style: none;
  padding: 0;
  background-color: rgba(222, 222, 222, 0.993);
  margin: 0;
`
export const LabelProfile = styled.span`
font-size: 12px;
  color: rgb(139, 139, 139);
  font-weight: 500;
  margin-bottom: 10px;
`
export const StatsItem = styled.li`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  min-height: 100%;
  &:not(:last-child) {
    border-right: 1px solid rgb(139, 139, 139);
`

export const Quantity = styled.span`
font-weight: 700;
`