import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  type MessageType
} from '@langchain/core/messages'

import type {
  LangchainMessage,
  LangchainMessageContents
} from '../types/langchain-message'

export class MessageBuilder {
  static createMessage(
    type: MessageType,
    messageContents: LangchainMessageContents
  ): LangchainMessage | null {
    switch (type) {
      case 'human':
        return new HumanMessage({ content: messageContents })
      case 'ai':
        return new AIMessage({ content: messageContents })
      case 'system':
        return new SystemMessage({ content: messageContents })
      default:
        return null
    }
  }
}