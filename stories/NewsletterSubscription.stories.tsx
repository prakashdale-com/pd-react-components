import './bootstrap.min.css'
import './styles.css'
import React from "react";
import { Default as Button } from "./Button.stories";
import { Default as Input } from "./Input.stories";
import { Story } from '@storybook/react';
export default {
    title: 'Fragments/NewsletterSubscription'
}

export const NewsletterSubscription = ()  => {
    return <>
        <Input placeholder="Enter your email" type="email"></Input>
        <Button>Subscribe</Button>
    </>
}
