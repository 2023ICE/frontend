import styled from 'styled-components';

const AddComma = ({ items, color }) => {
  return (
    <>
      {items?.map((item, index) => (
        <Item key={item} $color={color}>
          {item}
          {index !== items.length - 1 && (
            <span style={{ color: '#000' }}>,</span>
          )}
          &nbsp;
        </Item>
      ))}
    </>
  );
};

const Item = styled.p`
  color: ${({ $color }) => $color};
  display: inline-block;
`;

export default AddComma;
