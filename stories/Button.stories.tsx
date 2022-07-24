import './bootstrap.min.css'
import './styles.css'
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/Button";

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Click me'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({});


export const LargeButton = Template.bind({})
LargeButton.args = {
    size: 'lg'
}


