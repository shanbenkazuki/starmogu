import React, { useState } from 'react';
import axios from 'axios';
import { UIProvider, FormControl, Input, Button } from "@yamada-ui/react";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/users', { user: { username, password } });
      if (response.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("このユーザー名は既に使用されています。");
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
          <Button className="mt-4" type="submit">登録</Button>
        </FormControl>
      </form>
    </UIProvider>
  );
};

export default LoginForm;
