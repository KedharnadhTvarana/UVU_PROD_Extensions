define(
    'Tvarana.UVU.UVU',
    [
        'Tvarana.UVU.UVU.View',
        'tvarana_uvu_uvu.tpl',
        'Cart.AddToCart.Button.View',
        'underscore',
        'Utils',
        'jQuery'
    ],
    function (
        UVUView,
        tvarana_uvu_uvu_tpl,
        AddToCartButtonView,
        _,
        Utils,
        jQuery
    ) {
        'use strict';

        // Function to check if the quantity error is displayed
        function detectErrorMessages() {
            const errorElement = document.getElementById("quantity-error");
            if (errorElement && errorElement.style.display !== "none") {
                console.log("Error detected: Quantity error is present!");
                return true;
            } else {
                console.log("No quantity error detected.");
                return false;
            }
        }

        function addAppleCareToCart(quantity) {
            try {
                var itemId = jQuery('.add-to-cart-btn').data('itemid');
                if (!itemId) {
                    console.warn('No AppleCare ID found in DOM.');
                    return;
                }

                console.log('Adding AppleCare to the cart with quantity:', quantity);
                var cart = SC.Application.getComponent('Cart');
                cart.addLine({
                    line: {
                        quantity: quantity || 1, 
                        item: {
                            internalid: parseInt(itemId)
                        }
                    }
                }).then(function () {
                    console.log(`AppleCare item ${itemId} added to cart with quantity ${quantity}.`);

                    // Re-enable View Cart and Checkout buttons after AppleCare is successfully added
                    var btn = document.getElementsByClassName("cart-confirmation-modal-view-cart")[0];
                    if (btn) {
                        console.log("Enabling 'View Cart' and 'Checkout' buttons after successful AppleCare addition...");
                        btn.classList.remove("disabled");
                        btn.style.pointerEvents = "auto";
                        btn.style.opacity = "1";
                    }
                }).catch(function (err) {
                    console.error('Failed to add AppleCare item:', err);
                    // Keep buttons disabled if AppleCare addition fails
                    console.log("AppleCare addition failed, keeping buttons disabled.");
                });
            } catch (e) {
                console.error('Error in AppleCare addition:', e);
                // Keep buttons disabled if there's an error
                console.log("Error occurred during AppleCare addition, keeping buttons disabled.");
            }
        }

        return {
            mountToApp: function mountToApp(container) {
                _.extend(AddToCartButtonView.prototype, {
                    addToCart: _.wrap(
                        AddToCartButtonView.prototype.addToCart,
                        function (originalFunction) {
                            

                            var result = originalFunction.apply(this, _.toArray(arguments).slice(1));
                            console.log('Main item attempted to add.');

                            setTimeout(function () {
                                // Check if error is present
                                if (detectErrorMessages()) {
                                    console.log("Error detected, preventing add to cart functionality.");
                                    return; // Do not proceed if there's an error
                                }

                                try {
                                    var productPage = SC.Application.getComponent('PDP');
                                    var selectedMatrixChildren = productPage.getSelectedMatrixChilds();

                                    // Check if it's a matrix item (has matrix children)
                                    if (selectedMatrixChildren && selectedMatrixChildren.length > 0) {
                                        console.log('Matrix item detected.');
                                    } else {
                                        console.log('Normal (non-matrix) item detected.');

                                        var btn = document.getElementsByClassName("cart-confirmation-modal-view-cart")[0];
                                        if (btn) {
                                            console.log("Disabling 'View Cart' and 'Checkout' buttons...");
                                            btn.classList.add("disabled");
                                            btn.style.pointerEvents = "none";
                                            btn.style.opacity = "0.5";
                                        }

                                        setTimeout(function () {
                                            var mainItemQty = parseInt(jQuery('input[name="quantity"]').val()) || 1;
                                            console.log('Main item selected quantity:', mainItemQty);

                                            // DELAYED addition so AppleCare doesn't show in the popup
                                               
                                                setTimeout(function () {
                                                addAppleCareToCart(mainItemQty);
                                            }, 1500);
                                        }, 200);
                                    }
                                } catch (err) {
                                    console.error('Error checking matrix selection or adding AppleCare:', err);
                                }
                            }, 50);

                            return result;
                        }
                    )
                });

               
            }
        };
    }
);
