import React from "react";
import { connect } from "react-redux";

import { setLikedQuote, setInspirationalQuote, setInsightfulQuote } from "../../../redux/quote/quote.actions";

import './qt-button-panel.styles.scss'

const QuotifyButtonPanel = ({ randomColor, item, setLikedQuote, likedQuotesDB, setInspirationalQuote, inspirationalList, setInsightfulQuote, insightfulList }) => (
    <div className="col-auto ms-auto">
        {/* Like Button */}
        <span 
            class="px-2"
            style={{color:randomColor}}
            onClick={() => setLikedQuote(item)}
        >
        {
            likedQuotesDB.find(likedQuote => likedQuote.quoteId === item.quoteId) 
        ?
            <i class="bi bi-heart-fill text-danger" />
        :
            <i class="bi bi-heart" />
        }
        </span>
        {/* List Button */}
        <span 
            class="dropdown"
            style={{color: randomColor}}
        >
        <span
            data-bs-toggle="dropdown" 
            aria-expanded="false"
        >
        
            {
                inspirationalList.find(itemQuote => itemQuote.quoteId === item.quoteId) 
                ||
                insightfulList.find(itemQuote => itemQuote.quoteId === item.quoteId) 
            ?
            <i 
                class="bi bi-journal-bookmark-fill" 
                
            ></i>
            :
            <i 
                class="bi bi-journal-bookmark" 
            ></i>
            }
        </span>
            
            <ul class="dropdown-menu dropdown-menu-dark text-light" style={{backgroundColor:'rgba(33, 37, 41, 0.95)'}}>
                
            {
                inspirationalList.find(itemQuote => itemQuote.quoteId === item.quoteId) 
            ?
                <li 
                    class="dropdown-item cursor-pointer bi bi-bookmark-dash" 
                    onClick={() => setInspirationalQuote(item)}
                > 
                    <span class='px-2'>Inspirational List</span>
                </li>
            :
                <li 
                    class="dropdown-item cursor-pointer bi bi-bookmark-plus" 
                    onClick={() => setInspirationalQuote(item)}
                > 
                    <span class='px-2'>Inspirational List</span>
                </li>
            }
            {
                insightfulList.find(itemQuote => itemQuote.quoteId === item.quoteId) 
            ?
                <li 
                    class="dropdown-item cursor-pointer bi bi-bookmark-dash" 
                    onClick={() => setInsightfulQuote(item)}
                > 
                    <span class='px-2'>Insightful List</span>
                </li>
            :
                <li 
                    class="dropdown-item cursor-pointer bi bi-bookmark-plus" 
                    onClick={() => setInsightfulQuote(item)}
                > 
                    <span class='px-2'>Insightful List</span>
                </li>
            }
            
            </ul>
        </span>
        {/* Copy Button */}
        <span
        class="ps-2"
        style={{color: randomColor}}
        onClick={() =>  navigator.clipboard.writeText(`${item.quote} --${item.author}`)}
        > 
        <i class="bi bi-clipboard"/>
        </span>
        {/* Share Button */}
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${item.quote} - ${item.author}`}
            style={{color: randomColor}}
            class="ps-2"
        >
        <i class="bi bi-twitter"/>
        </a>
    </div>
)

const mapStateToProps = ({ quote: { randomColor, likedQuotesDB, inspirationalList, insightfulList }}) => ({
    randomColor, likedQuotesDB, inspirationalList, insightfulList
})

const mapDispatchToProps = dispatch => ({
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote)),
    setInspirationalQuote: inspirationalQuote => dispatch(setInspirationalQuote(inspirationalQuote)),
    setInsightfulQuote: insightfulQuote => dispatch(setInsightfulQuote(insightfulQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyButtonPanel);