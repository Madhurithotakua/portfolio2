import styled from 'styled-components';
import _default from '../../themes/default';

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.primaryShadow}; /* Apply primary shadow */
  }
`;
