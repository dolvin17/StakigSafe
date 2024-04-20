import React from 'react';
import Transfer from '@/components/home/transfer';
import History from '@/components/home/history';
import Navigation from '@/components/navigation/navigation';

export default function Page() {
	return (
		<>
		<Navigation />
		<Transfer />
		<History />
		</>
	)
}