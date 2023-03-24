import { ResponseModel } from '@/models';
import supabase from '@/services/supabase';

const patchChatComplete = async (
  chatID: number,
  outro: ResponseModel[] | null,
  complete: boolean,
) => {
  console.log('patching chat');
  try {
    const { data, error } = await supabase
      .from('bat_chats')
      .update({ id: chatID, outro: outro, complete: complete })
      .select()
      .single();

    if (error) {
      throw error;
    }

    if (data) {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default patchChatComplete;