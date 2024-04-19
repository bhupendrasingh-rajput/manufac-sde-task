import wineData from "../Wine-Data.json";
import { Table } from "@mantine/core";
import { calculateMean, calculateMedian, calculateMode } from "../Utils/Calculations";
import './tableStyles.css';

const Flavanoids = () => {
    const classOneFlavanoids = [];
    const classTwoFlavanoids = [];
    const classThreeFlavanoids = [];

    wineData.forEach(item => {
        if (item.Alcohol === 1) {
            classOneFlavanoids.push(item.Flavanoids);
        } else if (item.Alcohol === 2) {
            classTwoFlavanoids.push(item.Flavanoids);
        } else if (item.Alcohol === 3) {
            classThreeFlavanoids.push(item.Flavanoids);
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
                    <Table.Th>Flavonoids Mean</Table.Th>
                    <Table.Th>{calculateMean(classOneFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMean(classTwoFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMean(classThreeFlavanoids)}</Table.Th>
                </Table.Tr>
                <Table.Tr>
                    <Table.Th>Flavonoids Median</Table.Th>
                    <Table.Th>{calculateMedian(classOneFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMedian(classTwoFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMedian(classThreeFlavanoids)}</Table.Th>
                </Table.Tr>
                <Table.Tr>
                    <Table.Th>Flavonoids Mode</Table.Th>
                    <Table.Th>{calculateMode(classOneFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMode(classTwoFlavanoids)}</Table.Th>
                    <Table.Th>{calculateMode(classThreeFlavanoids)}</Table.Th>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    )
}

export default Flavanoids;