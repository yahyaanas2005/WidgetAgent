import { createClient } from '@deepgram/sdk';

const deepgram = createClient(process.env.DEEPGRAM_API_KEY!);

export async function transcribeAudio(audioBuffer: Buffer) {
  const { result } = await deepgram.listen.prerecorded.transcribeFile(
    audioBuffer,
    { model: 'nova-2', language: 'multi', detect_language: true }
  );
  
  if (!result || !result.results?.channels?.[0]?.alternatives?.[0]) {
    return '';
  }
  
  return result.results.channels[0].alternatives[0].transcript;
}
