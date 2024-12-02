import { createEditor, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';
import { withMarkdown } from './WithMarkdown.tsx';

class SlateBuilder {
  private editor: Editor;

  // 构造器：接受一个编辑器实例
  constructor(editor: Editor) {
    this.editor = editor;
  }

  // 创建一个新的编辑器
  public static create() {
    return new SlateBuilder(createEditor()); // 创建编辑器实例并返回
  }

  // 添加 React 插件
  public withReactPlugin() {
    this.editor = withReact(this.editor);
    return this; // 链式调用
  }

  // 添加 History 插件
  public withHistoryPlugin() {
    this.editor = withHistory(this.editor);
    return this; // 链式调用
  }

  // 你可以在此处添加更多插件，比如 withBold、withItalic 等
  public withMarkdownPlugin() {
    this.editor = withMarkdown(this.editor);
    return this; // 链式调用
  }

  // 返回构建好的编辑器实例
  public build() {
    return this.editor;
  }
}

export { SlateBuilder };
