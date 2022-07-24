import './bootstrap.min.css'
import './styles.css'
import React from "react";
import { Meta, Story } from "@storybook/react";
import { CloseButton } from "../src/Button";


const meta: Meta = {
    title: 'Close Button',
    component: CloseButton
}

export default meta;

const Template: Story = (args) => <CloseButton {...args} />

export const Default = Template.bind({});
Default.storyName = "Close Button"




