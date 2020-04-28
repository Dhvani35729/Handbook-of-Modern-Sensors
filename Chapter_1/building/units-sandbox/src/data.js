import React from 'react';

const emptyUnits = {
  A: 0,
  cd: 0,
  m: 0,
  kg: 0,
  K: 0,
  s: 0,
  mol: 0,
}

const baseUnits = [
  {
    name: 'Current',
    value: 'A',
    valueLabel: 'ampere',
    definition: "The ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 meter apart in vacuum, would produce between these conductors a force equal to 2×10−7 newtons per meter of length.",
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
    definition: "The candela is the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540×1012 hertz and that has a radiant intensity in the direction of 1/683 watts per steradian.",
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
    definition: "The meter is the length of path traveled by light in vacuum during a time interval of 1/299 792 458 of a second.",
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
    definition: "The kilogram is equal to the mass of the international prototype of the kilogram.",
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
    definition: "The kelvin, the unit of thermodynamic temperature, is the fraction of 1/273.16 of the thermodynamic temperature of the triple point of water.",
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
    definition: "The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom.",
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
    definition: "The mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 0.012 kg of carbon 12.",
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
    name: 'Acceleration',
    value: 'a',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Area',
    value: '𝐴',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Capacitance',
    value: 'F',
    valueLabel: 'farad',
    definition: "The farad is the capacitance of a capacitor between the plates of which there appears a difference of potential of 1 volt when it is charged by a quantity of electricity equal to 1 coulomb.",
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
  {
    name: 'Charge',
    value: 'C',
    valueLabel: 'coulomb',
    definition: "The coulomb is the quantity of electricity transported in 1 second by a current of 1 ampere.",
    baseUnits: {
      A: 1,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 1,
      mol: 0,
    },
  },
  {
    name: 'Density',
    value: 'ρ',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: -3,
      kg: 1,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Energy',
    value: 'J',
    valueLabel: 'joule',
    definition: "The joule is the work done when the point of application of a force of 1 newton is displaced a distance of 1 meter in the direction of the force. (Remember that energy equals force times distance.)",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Force',
    value: 'N',
    valueLabel: 'newton',
    definition: "The newton is that force which, when applied to a body having a mass of 1 kilogram, gives it an acceleration of 1 meter per second squared. (Remember that force equals mass time acceleration.)",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Frequency',
    value: 'Hz',
    valueLabel: 'hertz',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: -1,
      mol: 0,
    },
  },
  {
    name: 'Illuminance',
    value: 'lx',
    valueLabel: 'lux',
    definition: "The lux is equal to an illuminance of 1 lumen per square meter.",
    baseUnits: {
      A: 0,
      cd: 1,
      m: -2,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Inductance',
    value: 'H',
    valueLabel: 'henry',
    definition: "The henry is the inductance of a closed circuit in which an electromotive force of 1 volt is produced when the electric current in the circuit varies uniformly at a rate of 1 ampere per second.",
    baseUnits: {
      A: -2,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Jerk',
    value: 'j',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Luminous Flux',
    value: 'lm',
    valueLabel: 'Lumen',
    definition: "The lumen is the luminous flux emitted within a unit solid angle of 1 steradian by a point source having a uniform intensity of 1 candela.",
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
    name: 'Magnetic Flux',
    value: 'wb',
    valueLabel: 'weber',
    definition: "The weber is the magnetic flux which, linking a circuit of 1 turn, produces in it an electromotive force of 1 volt as it is reduced to zero at a uniform rate in 1 second.",
    baseUnits: {
      A: -1,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Magnetic Flux Density',
    value: 'T',
    valueLabel: 'tesla',
    definition: "The tesla is the magnetic flux density given by a magnetic flux of 1 weber per square meter.",
    baseUnits: {
      A: -1,
      cd: 0,
      m: 0,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Momentum',
    value: 'p',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 1,
      K: 0,
      s: -1,
      mol: 0,
    },
  },
  {
    name: 'Power',
    value: 'W',
    valueLabel: 'watt',
    definition: "The watt is the power which gives rise to the production of energy at the rate of 1 joule per second.",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Pressure',
    value: 'pa',
    valueLabel: 'pascal',
    definition: "The pascal is the pressure of 1 newton per square meter.",
    baseUnits: {
      A: 0,
      cd: 0,
      m: -1,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Potential',
    value: 'V',
    valueLabel: 'volt',
    definition: "The volt is the difference of electric potential between two points of a conductor.",
    baseUnits: {
      A: -1,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Resistance',
    value: 'Ω',
    valueLabel: 'ohm',
    definition: "The ohm is the electric resistance between two points of a conductor when a constant difference of potential of 1 volt, applied between these two points, produces in this conductor a current of 1 ampere.",
    baseUnits: {
      A: -2,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Volume',
    value: '𝑉',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 3,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Velocity',
    value: 'v',
    valueLabel: '',
    definition: "",
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: -1,
      mol: 0,
    },
  },
];

const constants = [
  {
    name: 'Speed of light in vacuum',
    value: '299,792,458',
    valueLabel: 'c',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: -1,
      mol: 0,
    },
  },
  {
    name: 'Gravity on Earth',
    value: '9.81',
    valueLabel: 'g',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Gravitational Constant',
    value: <>6.6740831 x 10<sup>-11</sup></>,
    valueLabel: 'G',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 3,
      kg: -1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Avogadro Constant',
    value: <>6.02214076 x 10<sup>23</sup></>,
    valueLabel: <>N<sub>A</sub></>,
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 0,
      mol: -1,
    },
  },
  {
    name: 'Planck constant',
    value: <>6.626 070 15 × 10<sup>-34</sup></>,
    valueLabel: <><i>h</i></>,
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -1,
      mol: 0,
    },
  },
  {
    name: 'Elementary Charge',
    value: <>1.602176634 × 10<sup>-19</sup></>,
    valueLabel: <><i>e</i></>,
    baseUnits: {
      A: 1,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 1,
      mol: 0,
    },
  },
  {
    name: 'Boltzmann constant',
    value: <>1.380649 × 10<sup>-23</sup></>,
    valueLabel: <><i>k</i></>,
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: -1,
      s: -2,
      mol: 0,
    },
  },
];

const equations = [
  {
    name: "Ideal Gas Law",
    units: ["Pressure", "Volume", "Temperature", "Quantity"],
    formula: "PV=nRT",
  }
]

export {emptyUnits, baseUnits, derivedUnits, constants, equations};
