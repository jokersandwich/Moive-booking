const seats = [
  {
    letter: 'A',
    seats: [
      { id: 'A1', state: 'available', display: true },
      { id: 'A2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'A3', state: 'available', display: true },
      { id: 'A4', state: 'available', display: true },
      { id: 'A5', state: 'available', display: true },
      { id: 'A6', state: 'available', display: true },
      { id: 'A7', state: 'available', display: true },
      { id: 'A8', state: 'available', display: true },
      { id: 'A9', state: 'available', display: true },
      { id: 'A10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'A11', state: 'occupied', display: true },
      { id: 'A12', state: 'available', display: true }
    ]
  }, {
    letter: 'B',
    seats: [
      { id: 'B1', state: 'occupied', display: true },
      { id: 'B2', state: 'occupied', display: true },
      { id: null, state: 'available', display: false },
      { id: 'B3', state: 'selected', display: true },
      { id: 'B4', state: 'available', display: true },
      { id: 'B5', state: 'available', display: true },
      { id: 'B6', state: 'available', display: true },
      { id: 'B7', state: 'available', display: true },
      { id: 'B8', state: 'available', display: true },
      { id: 'B9', state: 'available', display: true },
      { id: 'B10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'B11', state: 'available', display: true },
      { id: 'B12', state: 'available', display: true }
    ]
  }, {
    letter: 'C',
    seats: [
      { id: 'C1', state: 'available', display: true },
      { id: 'C2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'C3', state: 'available', display: true },
      { id: 'C4', state: 'available', display: true },
      { id: 'C5', state: 'available', display: true },
      { id: 'C6', state: 'available', display: true },
      { id: 'C7', state: 'available', display: true },
      { id: 'C8', state: 'available', display: true },
      { id: 'C9', state: 'available', display: true },
      { id: 'C10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'C11', state: 'available', display: true },
      { id: 'C12', state: 'available', display: true }
    ]
  }, {
    letter: 'D',
    seats: [
      { id: 'D1', state: 'available', display: true },
      { id: 'D2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'D3', state: 'available', display: true },
      { id: 'D4', state: 'available', display: true },
      { id: 'D5', state: 'available', display: true },
      { id: 'D6', state: 'available', display: true },
      { id: 'D7', state: 'available', display: true },
      { id: 'D8', state: 'available', display: true },
      { id: 'D9', state: 'available', display: true },
      { id: 'D10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'D11', state: 'available', display: true },
      { id: 'D12', state: 'available', display: true }
    ]
  }, {
    letter: 'E',
    seats: [
      { id: 'E1', state: 'available', display: true },
      { id: 'E2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'E3', state: 'available', display: true },
      { id: 'E4', state: 'available', display: true },
      { id: 'E5', state: 'available', display: true },
      { id: 'E6', state: 'available', display: true },
      { id: 'E7', state: 'available', display: true },
      { id: 'E8', state: 'available', display: true },
      { id: 'E9', state: 'available', display: true },
      { id: 'E10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'E11', state: 'available', display: true },
      { id: 'E12', state: 'available', display: true }
    ]
  }, {
    letter: 'F',
    seats: [
      { id: 'F1', state: 'available', display: true },
      { id: 'F2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'F3', state: 'available', display: true },
      { id: 'F4', state: 'available', display: true },
      { id: 'F5', state: 'available', display: true },
      { id: 'F6', state: 'available', display: true },
      { id: 'F7', state: 'available', display: true },
      { id: 'F8', state: 'available', display: true },
      { id: 'F9', state: 'available', display: true },
      { id: 'F10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'F11', state: 'available', display: true },
      { id: 'F12', state: 'available', display: true }
    ]
  }, {
    letter: 'G',
    seats: [
      { id: 'G1', state: 'available', display: true },
      { id: 'G2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'G3', state: 'available', display: true },
      { id: 'G4', state: 'available', display: true },
      { id: 'G5', state: 'available', display: true },
      { id: 'G6', state: 'available', display: true },
      { id: 'G7', state: 'available', display: true },
      { id: 'G8', state: 'available', display: true },
      { id: 'G9', state: 'available', display: true },
      { id: 'G10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'G11', state: 'available', display: true },
      { id: 'G12', state: 'available', display: true }
    ]
  }, {
    letter: 'H',
    seats: [
      { id: 'H1', state: 'available', display: true },
      { id: 'H2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'H3', state: 'available', display: true },
      { id: 'H4', state: 'available', display: true },
      { id: 'H5', state: 'available', display: true },
      { id: 'H6', state: 'available', display: true },
      { id: 'H7', state: 'available', display: true },
      { id: 'H8', state: 'available', display: true },
      { id: 'H9', state: 'available', display: true },
      { id: 'H10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'H11', state: 'available', display: true },
      { id: 'H12', state: 'available', display: true }
    ]
  }, {
    letter: 'I',
    seats: [
      { id: 'I1', state: 'available', display: true },
      { id: 'I2', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'I3', state: 'available', display: true },
      { id: 'I4', state: 'available', display: true },
      { id: 'I5', state: 'available', display: true },
      { id: 'I6', state: 'available', display: true },
      { id: 'I7', state: 'available', display: true },
      { id: 'I8', state: 'available', display: true },
      { id: 'I9', state: 'available', display: true },
      { id: 'I10', state: 'available', display: true },
      { id: null, state: 'available', display: false },
      { id: 'I11', state: 'available', display: true },
      { id: 'I12', state: 'available', display: true }
    ]
  }
]

module.exports = {
  seats: seats
}