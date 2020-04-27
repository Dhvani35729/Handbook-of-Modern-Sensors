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

function strEqual (str1, str2) {
  return str1.localeCompare (str2) == 0;
}

function App () {
  const baseUnits = [
    {
      name: 'Current',
      value: 'A',
      valueLabel: 'ampere',
      baseUnits: {
        A: 1,
        cd: 0,
        m: 0,
        kg: 0,
        K: 0,
        s: 0,
        mol: 0,
      },
    },
    {
      name: 'Intensity',
      value: 'cd',
      valueLabel: 'candela',
      baseUnits: {
        A: 0,
        cd: 1,
        m: 0,
        kg: 0,
        K: 0,
        s: 0,
        mol: 0,
      },
    },
    {
      name: 'Length',
      value: 'm',
      valueLabel: 'metre',
      baseUnits: {
        A: 0,
        cd: 0,
        m: 1,
        kg: 0,
        K: 0,
        s: 0,
        mol: 0,
      },
    },
    {
      name: 'Mass',
      value: 'kg',
      valueLabel: 'kilogram',
      baseUnits: {
        A: 0,
        cd: 0,
        m: 0,
        kg: 1,
        K: 0,
        s: 0,
        mol: 0,
      },
    },
    {
      name: 'Temperature',
      value: 'K',
      valueLabel: 'kelvin',
      baseUnits: {
        A: 0,
        cd: 0,
        m: 0,
        kg: 0,
        K: 1,
        s: 0,
        mol: 0,
      },
    },
    {
      name: 'Time',
      value: 's',
      valueLabel: 'second',
      baseUnits: {
        A: 0,
        cd: 0,
        m: 0,
        kg: 0,
        K: 0,
        s: 1,
        mol: 0,
      },
    },
    {
      name: 'Quantity',
      value: 'mol',
      valueLabel: 'mole',
      baseUnits: {
        A: 0,
        cd: 0,
        m: 0,
        kg: 0,
        K: 0,
        s: 0,
        mol: 1,
      },
    },
  ];

  const derivedUnits = [
    {
      name: 'Capacitance',
      value: 'F',
      valueLabel: 'farad',
      baseUnits: {
        A: 2,
        cd: 0,
        m: -2,
        kg: -1,
        K: 0,
        s: 4,
        mol: 0,
      },
    },
  ];

  const [presetUnitsDropdownOpen, setPresetUnitsDropdownOpen] = useState (
    false
  );
  const [currentUnit, setCurrentUnit] = useState ('');

  const [exponents, setExponents] = useState ({
    A: 0,
    cd: 0,
    m: 0,
    kg: 0,
    K: 0,
    s: 0,
    mol: 0,
  });

  function appendUnit (e, unit) {
    const newExponents = JSON.parse (JSON.stringify (exponents));
    if (e.type === 'click') {
      newExponents[unit] = newExponents[unit] + 1;
      setExponents (newExponents);
    } else if (e.type === 'contextmenu') {
      newExponents[unit] = newExponents[unit] - 1;
      setExponents (newExponents);
      e.preventDefault ();
    }
    const newExponentStr = JSON.stringify (newExponents);
    var unrecognizedUnit = true;
    baseUnits.forEach (unit => {
      if (newExponentStr === JSON.stringify (unit['baseUnits'])) {
        setCurrentUnit (unit['name']);
        unrecognizedUnit = false;
      }
    });
    derivedUnits.forEach (unit => {
      if (newExponentStr === JSON.stringify (unit['baseUnits'])) {
        setCurrentUnit (unit['name']);
        unrecognizedUnit = false;
      }
    });
    if (unrecognizedUnit) {
      setCurrentUnit ('');
    }
  }

  const togglePresetUnitsDropdown = () =>
    setPresetUnitsDropdownOpen (!presetUnitsDropdownOpen);

  function selectPresetUnit (unit) {
    setExponents (unit['baseUnits']);
    setCurrentUnit (unit['name']);
  }

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
                {strEqual (currentUnit, '') ? 'Preset Units' : currentUnit}
              </DropdownToggle>
              <DropdownMenu className="presetUnitsDropdown">
                <DropdownItem header>Fundamental Units</DropdownItem>
                {baseUnits.map (unit => {
                  return (
                    <DropdownItem
                      key={unit['name']}
                      active={strEqual (unit['name'], currentUnit)}
                      onClick={() => selectPresetUnit (unit)}
                    >
                      {unit['name']}
                    </DropdownItem>
                  );
                })}
                <DropdownItem divider />
                <DropdownItem header>Derived Units</DropdownItem>
                {derivedUnits.map (unit => {
                  return (
                    <DropdownItem
                      key={unit['name']}
                      active={strEqual (unit['name'], currentUnit)}
                      onClick={() => selectPresetUnit (unit)}
                    >
                      {unit['name']}
                    </DropdownItem>
                  );
                })}
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
                    {unit['value']}<sup>{exponents[unit['value']]}</sup>
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
