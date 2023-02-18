import React from 'react';
import './Footer.css';

function Footer(props) {
    const pages = props.total_pages
    const classes = "px-3 py-2 leading-tight text-purple-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-purple-700"
    const activeClasses = "z-10 px-3 py-2 leading-tight text-purple-600 border border-purple-300 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
    const all_page_list = Array(pages).fill(0).map((_, i) => {
        return (<li>
            <button onClick={props.handlePaginationChange('page')} class={props.selected_page == i + 1 ? activeClasses : classes} >{i + 1}</button>
        </li>)
    })
    return (
        <div className='flex justify-center mb-5'>
            <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center -space-x-px">
                    <li>
                        <button onClick={props.handlePaginationChange('previous')} class="block px-3 py-2 ml-0 leading-tight text-purple-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-purple-700">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </button>
                    </li>
                    {all_page_list}
                    <li>
                        <button onClick={props.handlePaginationChange('next')} class="block px-3 py-2 leading-tight text-purple-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-purple-700">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;