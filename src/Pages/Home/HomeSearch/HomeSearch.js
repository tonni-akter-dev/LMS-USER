import React from 'react';
import './HomeSearch.css'
const HomeSearch = () => {
    return (
        // #121B35 ---input bg
        <div>
            <section class="search-filters">
                <div class="container">
                    <div class="filter-box">
                        <h3 className='text-center pt-5 text-light'>Search your learning content</h3>
                        <form className="row p-5" action="" method="POST">
                            <div class="col-md-3 col-sm-6">
                                <div class="form-group">
                                    <div class="select">
                                        <select class="form-select form-select1" aria-label="Default select example">
                                            <option selected>All Branch</option>
                                            <option value="1">Gulshan</option>
                                            <option value="2">Banani</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="form-group">
                                    <div class="select">
                                        <select class="form-select form-select1" aria-label="Default select example">
                                            <option value="">All Catalog</option>
                                            <option value="title">Title</option>
                                            <option value="Media.call_no">Call Number</option>
                                            <option value="Media.isbn">ISBN</option>
                                            <option value="Media.issn">ISSN</option>
                                            <option value="Author.name">Author</option>
                                            <option value="Publisher.name">Publisher</option>
                                            <option value="Category.name">Category</option>
                                            <option value="Media.tags">Tags</option>
                                            <option value="MediaExtra.subject">Subject</option>
                                            <option value="MediaDetail.abstract">Abstract</option>
                                            <option value="MediaDetail.description">Description</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="form-group form-select1">
                                    <label class="sr-only" for="">Search by Keyword</label>
                                    <input class="form-control box" placeholder="Search by Keyword" id="" name="" type="text" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="form-group">
                                    <button class="btn btn-light mt-1 padding_btn" type="submit" value="Search" >Search </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSearch;