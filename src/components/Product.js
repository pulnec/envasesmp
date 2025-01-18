import React from 'react'

export const Product = ({ data }) => {
  return (
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={`./productos/${data.img}`} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title.toUpperCase()}</h5>
        </a>
    </div>
</div>
  )
}
