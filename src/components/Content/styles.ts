import styled from "styled-components";

export const Container = styled.main`
    width: 98%;
    margin: 0 auto;
    padding: 1rem;
    background: var(--background);
`;

export const Sidebar = styled.aside`
    width: 15% auto;
    max-width: 348px;
    color: var(--text-color);
`;

export const Box = styled.div`
    max-width: 310px;
    background: var(--bg-cards);
    border-radius: 0.875rem;

    padding: 2rem 2rem;
    margin-bottom: 20px;
    color: var(--text-color);

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    //Profile
    .box_item {
        flex-basis: 100%;
    }
    
    .box_item img {
        width: 100px;
        height: 100px;
        border: 2px solid #00FF00;
        border-radius: 50%;
    }

    .box_item h1 { 
        font-size: 1.6rem;
        font-weight: bold;
        margin: 15px 0 3px 0;
    }

    .box_item p {
        font-size: 0.8rem;
    }

    //Links
    .box_item ul li {
        margin: 10px 0;
    }

    .box_item ul li a, span {
        font-size: 0.8rem;
        color: var(--text-color);
        margin-left: 10px;
        position: relative;
        bottom: 4px;
    }

    //Tecnologias
    .box_item div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.7rem 0;
    }

    .box_item.tecnologias div button {
        flex-basis: 30%;
        font-size: 0.65rem;
        background-color: #CB92B1;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    //Experiências
    .box_item.experiencias div {
        position: relative;
        left: 15px;
    }

    .box_item.experiencias div span {
        display: block;
        font-size: 1.3rem;
        position: relative;
        bottom: 8px;
        font-weight: bold;
        flex-basis: 5%;
    }

    .box_item.experiencias div h4 {
        flex-basis: 95%;
    }

    .box_item.experiencias div .data, .cargo {
        flex-basis: 98%;
        font-size: 0.8rem;
        position: relative;
        bottom: 4px;
        left: 12px;
    }

    .data {
        font-weight: 300;
    }

    //Educação
`;