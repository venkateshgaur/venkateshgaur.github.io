'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // A minimal mock search functionality; 
        // will route/scroll based on the keywords later.
        if (query.trim()) {
            console.log(`Searching for: ${query}`);
            // TODO: implement section scroll logic based on keywords
        }
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <Search className={styles.searchIcon} size={18} />
            <input
                type="text"
                placeholder=""
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}
