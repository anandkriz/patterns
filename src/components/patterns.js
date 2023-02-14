import React, { useState } from 'react'

function Patterns() {

    // const leftPattern = () => {
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = i; j < i; j++) {
    //             console.log("*")
    //         }
    //     }
    //     console.log("\n")
    // }
    const pattens = [{ "pattern": "Square star pattern", "name": "squareStar" },
    { "pattern": "Hollow Square  Pattern", "name": "HollowSquare" },
    { "pattern": "Left star pattern", "name": "leftStar" },
    { "pattern": "Right star pattern", "name": "RightStar" },
    { "pattern": "Downward triangle pattern", "name": "DownwardStar" },
    { "pattern": "Hollow left triangle Pattern", "name": "Hollowlefttriangle" },
    { "pattern": "Pyramid star pattern", "name": "Pyramidstar" },
    { "pattern": "Reversed Pyramid Star Pattern", "name": "ReversedPyramid" },
    { "pattern": "Hollow Pyramid star pattern", "name": "HollowPyramid" },
    { "pattern": "Diamond pattern", "name": "Diamondpattern" },
    { "pattern": "Hour glass star pattern", "name": "Hourglassstarpattern" },
    { "pattern": "Right Pascal Star Pattern", "name": "RightPascalStar" },
    { "pattern": "Left Pascal star pattern", "name": "LeftPascalstar" },
    { "pattern": "Hollow Diamond Pattern", "name": "HollowDiamond" },]

    const [pattern, setPattern] = useState([])
    const [selectValues, setSelectValues] = useState();

    const SquareStarPattern = () => {
        let n = 5;
        let patterns = [];
        for (let i = 0; i < n; i++) {
            let pattern = ''
            for (let j = 0; j < n; j++) {
                pattern += "*";
            }
            patterns.push(pattern)
        };
        setPattern(patterns)

    };

    const leftStarPattern = () => {
        let n = 5;
        let patterns = []
        for (let i = 0; i < n; i++) {
            let pattern = ''
            for (let j = 0; j <= i; j++) {
                pattern += "*";
            }
            patterns.push(pattern)
        };
        setPattern(patterns)

    };

    const RightStarPattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 0; i < n; i++) {
            let pattern = '';
            for (let j = 0; j <= 0 n - i; j++) {
                pattern += ' ';
            }
            for (let k = 1; k <= i; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }

        setPattern(rows)
    };
    const Downtriangle = () => {
        let n = 5
        let patterns = []
        for (let i = 0; i < n; i++) {
            let pattern = ""
            for (let j = 0; j < n - i; j++) {
                pattern += "*"
            }
            patterns.push(pattern)
        }
        console.log(patterns)
        setPattern(patterns)
    }

    const HollowSquarePattern = () => {
        let n = 5;
        let patterns = [];
        for (let i = 0; i < n; i++) {
            let pattern = ''
            for (let j = 0; j < n; j++) {
                if (i == 0 || i == n - 1) {
                    pattern += "*"
                } else {
                    if (j == 0 || j == n - 1) {
                        pattern += "*";
                    } else {
                        pattern += " "
                    }
                }

            }
            patterns.push(pattern)
        };
        setPattern(patterns)

    };

    const HollowlefttrianglePattern = () => {
        let n = 5;
        let patterns = []
        for (let i = 0; i < n; i++) {
            let pattern = ''
            for (let j = 0; j <= i; j++) {
                if (i == 0 || i == 1 || i == n - 1) {
                    pattern += "*";
                } else {
                    if (j == 0 || j == i) {
                        pattern += "*";
                    } else {
                        pattern += " ";
                    }
                }
            }
            patterns.push(pattern)
        };
        setPattern(patterns)
    };




    const Pyramidstarpattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }
        setPattern(rows)
    }
    const ReversedPyramidStarPattern = () => {
        let n = 5;
        let rows = [];
        for (let i = 0; i < n; i++) {
            let pattern = ""
            for (let j = 0; j < i; j++) {
                pattern += " ";
            }
            for (let k = 0; k < 2 * (n - i) - 1; k++) {
                pattern += "*";
            }
            rows.push(pattern)
        }
        console.log(rows);
        setPattern(rows)
    }

    const HollowPyramidstarpattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                if (i == 0 || i == n) {
                    pattern += '*';
                } else {
                    if (k == 0 || k == 2 * i - 2) {
                        pattern += '*';
                    } else {
                        pattern += ' ';
                    }
                }
            }
            rows.push(pattern);
        }

        setPattern(rows)
    }

    const Diamondpattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 1; i <= n - 1; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }

        for (let i = 0; i < n; i++) {
            let pattern = ""
            for (let j = 0; j < i; j++) {
                pattern += " ";
            }
            for (let k = 0; k < 2 * (n - i) - 1; k++) {
                pattern += "*";
            }
            rows.push(pattern)
        }
        setPattern(rows)
    }

    const Hourglassstarpattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 0; i < n; i++) {
            let pattern = ""
            for (let j = 0; j < i; j++) {
                pattern += " ";
            }
            for (let k = 0; k < 2 * (n - i) - 1; k++) {
                pattern += "*";
            }
            rows.push(pattern)
        }
        setPattern(rows)

        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }
    }

    const RightPascalStarPattern = () => {
        let n = 5
        let patterns = []
        for (let i = 0; i < n - 1; i++) {
            let pattern = ''
            for (let j = 0; j <= i; j++) {
                pattern += "*"
            }
            patterns.push(pattern)

        }
        for (let i = 0; i < n; i++) {
            let pattern = ""
            for (let j = 0; j < n - i; j++) {
                pattern += "*"
            }
            patterns.push(pattern)
        }
        setPattern(patterns)
    }

    const LeftPascalstarpattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 1; k <= i; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }
        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= i; j++) {
                pattern += ' ';
            }
            for (let k = 1; k <= n - i; k++) {
                pattern += '*';
            }
            rows.push(pattern);
        }

        setPattern(rows)
    }

    const HollowDiamondPattern = () => {
        const rows = [];
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let pattern = '';
            for (let j = 1; j <= n - i; j++) {
                pattern += ' ';
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                if (i == 0) {
                    pattern += '*';
                } else {
                    if (k == 0 || k == 2 * i - 2) {
                        pattern += '*';
                    } else {
                        pattern += ' ';
                    }
                }
            }
            rows.push(pattern);
        }


        for (let i = 1; i <= n; i++) {
            let pattern = ""
            for (let j = 0; j < i; j++) {
                pattern += " ";
            }
            for (let k = (n - i) * 2 - 1; k >= 1; k--) {
                if (k === 1 || k === (n - i) * 2 - 1) {
                    pattern += "*";
                }
                else {
                    pattern += " ";
                }
            }
            rows.push(pattern)
        }


        setPattern(rows)
    }
    const onClick = () => {
        switch (selectValues) {
            case "squareStar":
                SquareStarPattern();
                break;
            case "leftStar":
                leftStarPattern();
                break;
            case "RightStar":
                RightStarPattern();
                break;
            case "DownwardStar":
                Downtriangle();
                break;
            case "HollowSquare":
                HollowSquarePattern();
                break;
            case "Hollowlefttriangle":
                HollowlefttrianglePattern();
                break;
            case "Pyramidstar":
                Pyramidstarpattern();
                break;
            case "ReversedPyramid":
                ReversedPyramidStarPattern();
                break;
            case "HollowPyramid":
                HollowPyramidstarpattern();
                break;
            case "Diamondpattern":
                Diamondpattern();
                break;
            case "Hourglassstarpattern":
                Hourglassstarpattern();
                break;
            case "RightPascalStar":
                RightPascalStarPattern();
                break;
            case "LeftPascalstar":
                LeftPascalstarpattern();
                break;
            case "HollowDiamond":
                HollowDiamondPattern();
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <select style={selectStyle} onChange={(e) => setSelectValues(e.target.value)}>
                <option>select a pattern</option>
                {pattens.map(({ pattern, name }) =>
                    <option value={name}>{pattern}</option>
                )}

            </select>
            <button style={buttonStyles} onClick={onClick}>pattern</button>
            {pattern.map((item) =>
                <pre><h1>{item}</h1></pre>
            )}

        </div>
    )
}


const selectStyle = {
    width: "200px",
    padding: "10px",
    fontSize: "16px",
    border: "solid 1px #ddd",
    borderRadius: "4px",
}
const buttonStyles = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px'
};

export default Patterns