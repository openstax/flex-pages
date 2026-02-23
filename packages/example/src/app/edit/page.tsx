'use client';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../components/EditorPage'), { ssr: false });

export default function EditPage() {
  return <Editor />;
}
