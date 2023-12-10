import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TopicCard from '.';

const meta: Meta<typeof TopicCard> = {
	component: TopicCard,
	title: 'TopicCard',
	tags: ['autodocs'],
	argTypes: {
		recipe: {
			control: { type: 'text' },
			// control: { type: 'radio' },
			// options: [1, 2, 3],
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

/**  comments shows in TopicCard story Docks  */
export const Default: Story = {
	args: {
		recipe: {
			author: 1,
			name: 'aaa',
			text: 'bbb',
			ingredients: [],
			cooking_time: 30,
			image: 'https://goodfood.acceleratorpracticum.ru/media/images/recipes/1.jpg',
		},
	},
	render: (args) => (
		<BrowserRouter>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '20px',
				}}
			>
				<TopicCard {...args} />
				<TopicCard {...args} />
				<TopicCard {...args} />
			</div>
		</BrowserRouter>
	),
};
