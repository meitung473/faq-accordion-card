import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.article)`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 1em 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Dividers};
    background-color: ${({ theme }) => theme.colors.greyScale.black_0};
`;
const Header = styled(motion.header)`
    display: flex;
    width: 100%;
    align-items: center;
`;

const Content = styled(motion.p)`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.005em;
    color: ${({ theme }) => theme.colors.secondary.Default};
    transform-origin: top left;
`;

export { Wrapper, Header, Content };
