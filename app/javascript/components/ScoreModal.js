import React from 'react';
import { UIProvider, Modal, ModalHeader, ModalBody, ModalFooter } from "@yamada-ui/react";
import { Button } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { FaSquareXTwitter } from "react-icons/fa6";

const ScoreModal = ({ score, isOpen, onClose, level }) => {
  const levelText = ["初級", "中級", "上級"][level];
  const pageUrl = "https://gyazo.com/33c4a82e2cd0a50794d6fbed5d37177f";
  const tweetText = `私の${levelText}のスコアは ${score} 点です！ #ミニアプリウィーク ${pageUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <UIProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>タイムアップ！</ModalHeader>

        <ModalBody>
          あなたの{levelText}のスコアは {score} 点です。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={() => window.open('/', '_self')}>
            Homeに戻る
          </Button>
          <Button leftIcon={<Icon as={FaSquareXTwitter} />} onClick={() => window.open(twitterUrl, '_blank')}>
            シェア
          </Button>
        </ModalFooter>
      </Modal>
    </UIProvider>
  );
};

export default ScoreModal;
