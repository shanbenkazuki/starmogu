import React from "react";
import axios from 'axios';
import { UIProvider, TableContainer, NativeTable, Thead, Tbody, Tr, Th, Td, Button } from "@yamada-ui/react";
import { useState, useEffect } from 'react';

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get('/fetch_ranking');
        console.log(response.data)
        setRanking(response.data);
      } catch (error) {
        console.error('ランキングデータの取得に失敗しました', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <React.Fragment>
      <UIProvider>
        <TableContainer>
          <NativeTable>
            <Thead>
              <Tr>
                <Th>ユーザ名</Th>
                <Th>スコア</Th>
                <Th>レベル</Th>
              </Tr>
            </Thead>

            <Tbody>
              {ranking.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.username}</Td>
                  <Td>{item.score}</Td>
                  <Td>{item.level}</Td>
                </Tr>
              ))}
            </Tbody>
          </NativeTable>
        </TableContainer>
        <Button variant="ghost" onClick={() => window.open('/', '_self')}>
          Homeに戻る
        </Button>
      </UIProvider>
    </React.Fragment>
  );
};

export default Ranking;
