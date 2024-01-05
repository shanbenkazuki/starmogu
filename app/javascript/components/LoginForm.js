import React, { useState } from 'react';
import axios from 'axios';
import { UIProvider, FormControl, Input, Button } from "@yamada-ui/react";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { user: { username, password } });
      if (response.status === 200) {
        console.log(response)
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("ユーザーが見つかりませんでした。");
      } else {
        alert("エラーが発生しました。");
      }
    }
  };

  return (
    <UIProvider>
      <form onSubmit={handleSubmit}>
        <FormControl label="ユーザ名" isRequired errorMessage="ユーザ名は必須です。">
          <Input
            type="text"
            name="user[username]"
            placeholder="ユーザ名"
            value={username}
            autoComplete="username"
            onChange={e => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl label="パスワード" isRequired errorMessage="パスワードは必須です。">
          <Input
            type="password"
            name="user[password]"
            placeholder="パスワード"
            value={password}
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button className="mt-4" type="submit">ログイン</Button>
        </FormControl>
      </form>
    </UIProvider>
  );
};

export default LoginForm;
