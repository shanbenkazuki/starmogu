import React, { useState } from 'react';
import axios from 'axios';
import { UIProvider } from "@yamada-ui/react"
import { FormControl } from "@yamada-ui/react"

import { Input } from "@yamada-ui/react"

import { Button, ButtonGroup } from "@yamada-ui/react"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      if (response.status === 200) {
        console.log('ログイン成功');
        window.location.href = '/'; // ルートにリロードして遷移
      }
    } catch (error) {
      // エラー処理
    }
  };

  return (
    <UIProvider>
      <form onSubmit={handleSubmit}>
        <FormControl label="ユーザ名">
          <Input type="text" placeholder="ユーザ名" />
        </FormControl>
        <FormControl label="パスワード">
          <Input type="passowrd" placeholder="パスワード" />
        </FormControl>
        <FormControl>
          <Button className="mt-4" type="submit">ログイン</Button>
        </FormControl>
      </form>
    </UIProvider>
  );
};

export default LoginForm;
