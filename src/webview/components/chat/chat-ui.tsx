import type { FC } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useChatContextManager } from '@webview/hooks/chat/use-chat-context-manager'
import { ChatService } from '@webview/services/chat-service'

import { SidebarLayout } from '../sidebar-layout'
import { ChatInput } from './editor/chat-input'
import { ChatHeader } from './header/chat-header'
import { ChatMessages } from './messages/chat-messages'
import { ChatSidebar } from './sidebar/chat-sidebar'

export const ChatUI: FC = () => {
  const { context, setContext, newConversation, setNewConversation, messages } =
    useChatContextManager()

  const { mutate: sendMessage, isPending: isSendingMessage } = useMutation({
    mutationFn: () => ChatService.sendMessage(context, newConversation)
  })

  return (
    <SidebarLayout
      sidebar={<ChatSidebar />}
      buildHeader={SidebarHamburger => (
        <ChatHeader headerLeft={<SidebarHamburger />} />
      )}
      className="chat-ui"
    >
      <ChatMessages messages={messages} />
      <ChatInput
        context={context}
        setContext={setContext}
        newConversation={newConversation}
        setNewConversation={setNewConversation}
        sendButtonDisabled={isSendingMessage}
        onSend={sendMessage}
      />
    </SidebarLayout>
  )
}
