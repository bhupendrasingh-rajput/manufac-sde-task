import wineData from "../Wine-Data.json";
import { Table } from "@mantine/core";
import { calculateMean, calculateMedian, calculateMode } from "../Utils/Calculations";
import './tableStyles.css';


const Gamma = () => {
    const copyData = JSON.parse(JSON.stringify(wineData));

    copyData.forEach((item) => {
        item.Gamma = parseFloat(item.Gamma = (Number(item.Ash) * Number(item.Hue) / Number(item.Magnesium)).toFixed(3));;
    })

    const classOneGamma = [];
    const classTwoGamma = [];
    const classThreeGamma = [];

    copyData.forEach(item => {
        if (item.Alcohol === 1) {
            classOneGamma.push(item.Gamma);
        } else if (item.Alcohol === 2) {
            classTwoGamma.push(item.Gamma);
        } else if (item.Alcohol === 3) {
            classThreeGamma.push(item.Gamma);
        }
    });
    return (
        <Table className="table">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Measure</Table.Th>
                    <Table.Th>Class 1</Table.Th>
                    <Table.Th>Class 2</Table.Th>
                    <Table.Th>Class 3</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Th>Gamma Mean</Table.Th>
                    <Table.Th>{calculateMean(classOneGamma)}</Table.Th>
                    <Table.Th>{calculateMean(classTwoGamma)}</Table.Th>
                    <Table.Th>{calculateMean(classThreeGamma)}</Table.Th>
                </Table.Tr>
                <Table.Tr>
                    <Table.Th>Gamma Median</Table.Th>
                    <Table.Th>{calculateMedian(classOneGamma)}</Table.Th>
                    <Table.Th>{calculateMedian(classTwoGamma)}</Table.Th>
                    <Table.Th>{calculateMedian(classThreeGamma)}</Table.Th>
                </Table.Tr>
                <Table.Tr>
                    <Table.Th>Gamma Mode</Table.Th>
                    <Table.Th>{calculateMode(classOneGamma)}</Table.Th>
                    <Table.Th>{calculateMode(classTwoGamma)}</Table.Th>
                    <Table.Th>{calculateMode(classThreeGamma)}</Table.Th>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    )
}

export default Gamma;