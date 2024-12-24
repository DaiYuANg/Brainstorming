import { createEditor, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';
import { withMarkdown } from './WithMarkdown.tsx';

class SlateBuilder {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public static create() {
    return new SlateBuilder(createEditor());
  }

  public withReactPlugin() {
    this.editor = withReact(this.editor);
    return this;
  }

  public withHistoryPlugin() {
    this.editor = withHistory(this.editor);
    return this;
  }

  public withMarkdownPlugin() {
    this.editor = withMarkdown(this.editor);
    return this;
  }

  public build() {
    return this.editor;
  }
}

export { SlateBuilder };
