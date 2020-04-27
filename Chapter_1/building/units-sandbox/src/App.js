import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './App.css';

function App () {
  const [presetUnitsDropdownOpen, setPresetUnitsDropdownOpen] = useState (
    false
  );

  const togglePresetUnitsDropdown = () =>
    setPresetUnitsDropdownOpen (!presetUnitsDropdownOpen);

  return (
    <Container>
      <Row>
        <Col md="6" className="buildContainer">
          <div className="buildHeader">
            <p>
              Click on a unit below to build units or select a preset unit from the dropdown.
            </p>
            <ButtonDropdown
              isOpen={presetUnitsDropdownOpen}
              toggle={togglePresetUnitsDropdown}
              className="presetUnitsBtn"
            >
              <DropdownToggle caret>
                Preset Units
              </DropdownToggle>
              <DropdownMenu className="presetUnitsDropdown">
                <DropdownItem header>Fundamental Units</DropdownItem>
                <DropdownItem>Current</DropdownItem>
                <DropdownItem>Intensity</DropdownItem>
                <DropdownItem>Length</DropdownItem>
                <DropdownItem>Mass</DropdownItem>
                <DropdownItem>Temperature</DropdownItem>
                <DropdownItem>Time</DropdownItem>
                <DropdownItem>Quantity</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Derived Units</DropdownItem>
                <DropdownItem>Capacitance</DropdownItem>
                <DropdownItem>Charge</DropdownItem>
                <DropdownItem>Force</DropdownItem>
                <DropdownItem>Energy</DropdownItem>
                <DropdownItem>Illuminance</DropdownItem>
                <DropdownItem>Inductance</DropdownItem>
                <DropdownItem>Luminous Flux</DropdownItem>
                <DropdownItem>Magnetic Flux</DropdownItem>
                <DropdownItem>Magnetic Flux Density</DropdownItem>
                <DropdownItem>Power</DropdownItem>
                <DropdownItem>Pressure</DropdownItem>
                <DropdownItem>Potential</DropdownItem>
                <DropdownItem>Resistance</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <hr />
          <div className="buildBody">
            <p>m</p>
            <p>kg</p>
            <p>s</p>
            <p>A</p>
            <p>K</p>
            <p>mol</p>
            <p>cd</p>
          </div>
          <hr />
          <div className="buildFooter">
            <h6>External Links</h6>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/International_System_of_Units"
                >
                  Système international / International System of Units (SI)
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://app.knovel.com/uc/"
                >
                  Unit Converter
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="6">
          <p>Display</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
