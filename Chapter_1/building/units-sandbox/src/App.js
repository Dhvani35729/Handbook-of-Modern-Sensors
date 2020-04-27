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
        </Col>
        <Col md="6">
          <p>Display</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
