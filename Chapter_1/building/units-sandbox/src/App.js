import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';
import './App.css';

function App () {
  const baseUnits = [
    {
      name: 'Current',
      label: 'I',
      value: 'A',
      valueLabel: 'ampere',
    },
    {
      name: 'Intensity',
      label: 'J',
      value: 'cd',
      valueLabel: 'candela',
    },
    {
      name: 'Length',
      label: 'L',
      value: 'm',
      valueLabel: 'metre',
    },
    {
      name: 'Mass',
      label: 'M',
      value: 'kg',
      valueLabel: 'kilogram',
    },
    {
      name: 'Temperature',
      label: 'Θ',
      value: 'K',
      valueLabel: 'kelvin',
    },
    {
      name: 'Time',
      label: 'T',
      value: 's',
      valueLabel: 'second',
    },
    {
      name: 'Quantity',
      label: 'N',
      value: 'mol',
      valueLabel: 'mole',
    },
  ];
  const [presetUnitsDropdownOpen, setPresetUnitsDropdownOpen] = useState (
    false
  );
  const [currentUnit, setCurrentUnit] = useState ('');
  function initExponents () {
    var exponentMap = new Map ();
    baseUnits.forEach (unit => {
      exponentMap.set (unit['value'], 0);
    });
    return exponentMap;
  }
  const [exponents, setExponents] = useState (initExponents);

  function appendUnit (e, unit) {
    if (e.type === 'click') {
      setExponents (new Map (exponents.set (unit, exponents.get (unit) + 1)));
    } else if (e.type === 'contextmenu') {
      setExponents (new Map (exponents.set (unit, exponents.get (unit) - 1)));
      e.preventDefault ();
    }
  }

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
                {baseUnits.map (unit => {
                  return (
                    <DropdownItem key={unit['name']}>
                      {unit['name']}
                    </DropdownItem>
                  );
                })}
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
            {baseUnits.map (unit => {
              return (
                <h2 key={unit['value']}>
                  <Badge
                    onClick={e => appendUnit (e, unit['value'])}
                    onContextMenu={e => appendUnit (e, unit['value'])}
                    color="info"
                    className="unitBtn"
                  >
                    {unit['value']}<sup>{exponents.get (unit['value'])}</sup>
                  </Badge>
                </h2>
              );
            })}
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
