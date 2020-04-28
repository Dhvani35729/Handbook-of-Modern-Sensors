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
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';
import {baseUnits, derivedUnits, constants, emptyUnits} from './data';
import {strEqual, objEqual} from './utilities';
import './App.css';

function App () {
  const [presetUnitsDropdownOpen, setPresetUnitsDropdownOpen] = useState (
    false
  );
  const [currentUnit, setCurrentUnit] = useState ('');

  const [exponents, setExponents] = useState (emptyUnits);

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

  function unitsToString (baseUnits) {
    var unitsStr = []
    Object.keys (baseUnits).forEach (key => {
      if (baseUnits[key] !== 0) {
        unitsStr.push(<>{key}<sup>{baseUnits[key]}</sup></>);
      }
    });
    return unitsStr;
  }

  function resetExponents(){
    setExponents(emptyUnits);
    setCurrentUnit('');
  }

  return (
    <Container>
      <Row>
        <Col md="6" className="buildContainer">
          <div className="buildHeader">
            <p>
              Click on a unit below to build units or select a preset unit from the dropdown.
              <br />
              <b>Left click = increment exponent</b>
              <br />
              <b> Right click = decrement exponennt</b>
            </p>
            <ButtonDropdown
              isOpen={presetUnitsDropdownOpen}
              toggle={togglePresetUnitsDropdown}
              className="presetUnitsBtn"
            >
              <DropdownToggle
                caret
                color={strEqual (currentUnit, '') ? 'secondary' : 'success'}
              >
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
                    color={
                      exponents[unit['value']] === 0 ? 'secondary' : 'info'
                    }
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
          <Button color="danger" onClick={resetExponents}>Reset</Button>
            <h6 className="footerLinks">External Links</h6>
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
        <Col md="6" className="displayContainer">
          <ListGroup className="displayCard">
            <ListGroupItem>
              <b>Units:</b>
              {" "}{unitsToString (exponents).map(comp => comp)}
              {!objEqual(exponents, emptyUnits) &&
              baseUnits.concat(derivedUnits).map (unit => {
                if(objEqual(exponents, unit["baseUnits"])){
                  return (
                    <p style={{marginBottom: 0}}>
                      {unit["name"]}: {" "} {unit["valueLabel"]} {"("}{unit["value"]}{")"}
                      </p>
                  );
                }
              })}
            </ListGroupItem>
            <ListGroupItem>
              <b>Constants</b>
              {constants.map (constant => {
                if(objEqual(exponents, constant["baseUnits"])){
                  return (
                    <ListGroup
                      className="childDisplayGroup"
                      key={constant['name']}
                    >
                      <ListGroupItem color="info">
                        {constant['name'] + ' ('}{constant['valueLabel']}{')'}
                      </ListGroupItem>
                      <ListGroupItem>{constant['value']}</ListGroupItem>
                    </ListGroup>
                  );
                }
              })}
            </ListGroupItem>
            <ListGroupItem><b>Equations</b></ListGroupItem>
            <ListGroupItem><b>Definitions</b>
            {baseUnits.concat(derivedUnits).map (unit => {
                if(objEqual(exponents, unit["baseUnits"])){
                  return (
                  <p>{unit["definition"]}</p>
                  );
                }
              })}

            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
