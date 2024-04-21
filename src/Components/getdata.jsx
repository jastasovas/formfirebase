import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase_config";

const Table = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const questions = await getDocs(collection(db, "data"));
      const usersData = questions.docs.map((e) => ({
        id: e.id,
        ...e.data(),
      }));
      setQuestion(usersData);
    };

    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Question</th>
        </tr>
      </thead>
      <tbody>
        {question.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.question}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
