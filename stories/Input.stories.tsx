import './bootstrap.min.css'
import './styles.css'
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, Props } from "../src/Input";

const meta: Meta = {
    title: 'Input',
    component: Input,
    argTypes: {
        
    }
}

export default meta;

const template: Story<Props> = (args) => <Input {...args} />

export const Default = template.bind({})
