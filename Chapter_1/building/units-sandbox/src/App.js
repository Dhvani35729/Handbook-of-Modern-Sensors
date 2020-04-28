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
import {baseUnits, derivedUnits, constants, emptyUnits, equations} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {strEqual, objEqual} from './utilities';
import './App.css';

function App () {
  const [presetUnitsDropdownOpen, setPresetUnitsDropdownOpen] = useState (
    false
  );
  const [constantsDropdownOpen, setConstantsDropdownOpen] = useState (false);
  const [currentUnit, setCurrentUnit] = useState ('');
  const [currentConstant, setCurrentConstant] = useState ('');

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

    var unrecognizedUnit = true;

    baseUnits.concat (derivedUnits).forEach (unit => {
      if (objEqual (newExponents, unit['baseUnits'])) {
        setCurrentUnit (unit['name']);
        unrecognizedUnit = false;
      }
    });

    if (unrecognizedUnit) {
      setCurrentUnit ('');
    }

    var constantFound = false;
    constants.forEach (constant => {
      if (objEqual (constant['baseUnits'], newExponents)) {
        setCurrentConstant (constant['name']);
        constantFound = true;
      }
    });
    if (!constantFound) {
      setCurrentConstant ('');
    }
  }

  const togglePresetUnitsDropdown = () =>
    setPresetUnitsDropdownOpen (!presetUnitsDropdownOpen);

  const toggleConstantsDropdown = () =>
    setConstantsDropdownOpen (!constantsDropdownOpen);

  function selectPresetUnit (unit) {
    setExponents (unit['baseUnits']);
    setCurrentUnit (unit['name']);
    var constantFound = false;
    constants.forEach (constant => {
      if (objEqual (constant['baseUnits'], unit['baseUnits'])) {
        setCurrentConstant (constant['name']);
        constantFound = true;
      }
    });
    if (!constantFound) {
      setCurrentConstant ('');
    }
  }

  function selectConstant (constant) {
    setExponents (constant['baseUnits']);
    setCurrentConstant (constant['name']);
    var unrecognizedUnit = true;
    baseUnits.concat (derivedUnits).forEach (unit => {
      if (objEqual (unit['baseUnits'], constant['baseUnits'])) {
        setCurrentUnit (unit['name']);
        unrecognizedUnit = false;
      }
    });
    if (unrecognizedUnit) {
      setCurrentUnit ('');
    }
  }

  function unitsToString (baseUnits) {
    var unitsStr = [];
    Object.keys (baseUnits).forEach (key => {
      if (baseUnits[key] !== 0) {
        unitsStr.push(<>{key}<sup>{baseUnits[key]}</sup></>);
      }
    });
    return unitsStr;
  }

  function resetExponents () {
    setExponents (emptyUnits);
    setCurrentUnit ('');
    setCurrentConstant ('');
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
            <div className="dropdownsContainer">
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
              <ButtonDropdown
                isOpen={constantsDropdownOpen}
                toggle={toggleConstantsDropdown}
              >
                <DropdownToggle
                  caret
                  color={
                    strEqual (currentConstant, '') ? 'secondary' : 'success'
                  }
                >
                  {strEqual (currentConstant, '')
                    ? 'Constants'
                    : currentConstant}
                </DropdownToggle>
                <DropdownMenu>
                  {constants.map (constant => {
                    return (
                      <DropdownItem
                        key={constant['name']}
                        active={strEqual (constant['name'], currentConstant)}
                        onClick={() => selectConstant (constant)}
                      >
                        {constant['name']}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
            </div>
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
              {' '}{unitsToString (exponents).map (comp => comp)}
              {!objEqual (exponents, emptyUnits) &&
                baseUnits.concat (derivedUnits).map (unit => {
                  if (objEqual (exponents, unit['baseUnits'])) {
                    return (
                      <p style={{marginBottom: 0}}>
                        {unit['name']}
                        :
                        {' '}
                        {' '}
                        {' '}
                        {unit['valueLabel']}
                        {' '}
                        {'('}
                        {unit['value']}
                        {')'}
                      </p>
                    );
                  }
                })}
            </ListGroupItem>
            <ListGroupItem>
              <b>Constants</b>
              {constants.map (constant => {
                if (objEqual (exponents, constant['baseUnits'])) {
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
            <ListGroupItem><b>Equations</b>
            {equations.map (equation => {
                if (equation["units"].indexOf(currentUnit) > -1) {
                  return (
                    <ListGroup
                      className="childDisplayGroup"
                      key={equation['name']}
                    >
                      <ListGroupItem color="warning">
                        {equation['name']}
                      </ListGroupItem>
                      <ListGroupItem>{equation['formula']}</ListGroupItem>
                    </ListGroup>
                  );
                }
              })}
            </ListGroupItem>
            <ListGroupItem>
              <b>Definitions</b>
              {baseUnits.concat (derivedUnits).map (unit => {
                if (objEqual (exponents, unit['baseUnits'])) {
                  return <p>{unit['definition']}</p>;
                }
              })}

            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <p className="loveFooter">
          Made with
          {' '}
          <FontAwesomeIcon icon={faHeart} />
          {' '}
          by
          {' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pateldhvani.com/"
          >
            Dhvani
          </a>
          {' '}
          |
          {' '}
          <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://github.com/Dhvani35729/Handbook-of-Modern-Sensors/tree/master/Chapter_1/building/units-sandbox"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </Row>
    </Container>
  );
}

export default App;
