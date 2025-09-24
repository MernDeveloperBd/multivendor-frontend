import { Box } from '@mui/material';
import { womenLabelTwo } from '../../data/category/lavelTwo/womenLabelTwo';
import { menLabelTwo } from '../../data/category/lavelTwo/menLabelTwo';
import { womenLabelThree } from '../../data/category/labelThree/womenLabelThree';
import { menLabelThree } from '../../data/category/labelThree/menLabelThree';
import { useNavigate } from 'react-router';

const categoryTwo: { [key: string]: any[] } = {
    women_fashion: womenLabelTwo,
    men_fashion: menLabelTwo,
}
const categoryThree: { [key: string]: any[] } = {
    women_fashion: womenLabelThree,
    men_fashion: menLabelThree,
}

const CategorySheet = ({ selectedCategory, toggleDrawer, setShowSheet }: any) => {
    const navigate = useNavigate()
    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId === parentCategoryId)
    }
    return (
        <Box className="bg-white shadow-lg lg:h-[500px] overflow-auto z-[999]">
            <div className='flex text-sm flex-wrap'>
                {
                    categoryTwo[selectedCategory]?.map((item: any, index) => <div
                        className={`p-8 lg:w-[20%] ${index % 2 == 0 ? "bg-slate-50" : "bg-white"}`}
                        key={item?.name}>
                        <p className='text-teal-700 mb-2 font-semibold'>{item?.name}</p>
                        <ul className='space-y-3 text-gray-700'>
                            {
                                childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item: any) => <div key={item?.name}>
                                    <li onClick={() => navigate(`/products/${item?.name}`)} className='cursor-pointer hover:text-teal-700'>{item?.name}</li>
                                </div>)
                            }
                        </ul>
                    </div>)
                }
            </div>
        </Box>
    );
};

export default CategorySheet;