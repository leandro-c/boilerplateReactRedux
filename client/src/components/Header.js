import react, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

function Header() {
        return (
            {/* <React.Fragment>
            <Nav>
                <NavHeader>
                    <NavLeft>
                    <img src="https://live.pystatic.com/webassets/common/logo-es-3f7be267ae60c49c55f747799efa5753.svg" alt="PedidosYa"></img>
                    </NavLeft>

                    <NavCenter>
                        <Input type="text" placeholder="Search" />
                    </NavCenter>

                    <NavRight>
                        <MenuLink href="#">
                            <Compass />
                        </MenuLink>

                        <MenuLink href="#">
                            <Explore />
                        </MenuLink>

                        <MenuLink href="#">
                            <Avatar />
                        </MenuLink>
                    </NavRight>
                </NavHeader>
            </Nav>
            </React.Fragment> */}
        );
    }

export default Header;