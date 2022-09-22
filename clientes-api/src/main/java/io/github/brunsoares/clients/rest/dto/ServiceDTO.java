package io.github.brunsoares.clients.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
public class ServiceDTO {
    @NotEmpty(message = "{field.description.required}")
    private String description;
    @NotEmpty(message = "{field.price.required}")
    private String price;
    @NotEmpty(message = "{field.date.required}")
    private String date;
    @NotNull(message = "{field.client.required}")
    private Integer clientID;

    public LocalDate convertToLocalDate(){
        return LocalDate.parse(getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }

    public BigDecimal convertToBigDecimal(){
        if(StringUtils.isNotBlank(getPrice())) {
            String value = getPrice();
            value = value.replace(".", "").replace(",", ".");
            return new BigDecimal(value);
        } else{
            return new BigDecimal(0);
        }
    }
}
