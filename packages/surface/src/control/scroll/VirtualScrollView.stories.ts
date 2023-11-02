import type {Meta, StoryObj} from "@storybook/react";
import {VirtualScrollView} from "./VirtualScrollView.tsx";

const meta = {
    title: 'Control/VirtualScrollView',
    component: VirtualScrollView,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onclick: ()=>{
            console.log(123)
        },
    },
} satisfies Meta<typeof VirtualScrollView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       data:Array(3000)
            .fill(0)
            .map((_, index) => index),
        itemHeight:50,
    },
};
