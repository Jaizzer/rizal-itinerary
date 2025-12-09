import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import Page from './Page';
import TourDetail from './TourDetail';

export default function TourDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<Page>
			{/* Back button */}
			<div className="mt-6 px-10">
				<button
					className="flex items-center gap-2 bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors"
					onClick={() => {
						void navigate('/');
					}}
				>
					<FiArrowLeft size={20} /> Back
				</button>
			</div>

			<TourDetail id={id} />
		</Page>
	);
}
